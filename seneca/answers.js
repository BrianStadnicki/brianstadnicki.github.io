window.onload = function onload() {
    document.getElementById("answers").innerHTML = null

    let url = new URLSearchParams(window.location.search).get("furl")
    document.getElementById("furl").value = url
    if (url === "") {
        return
    }
    let course = /(?<=https:\/\/app\.senecalearning\.com\/classroom\/course\/)(.*)(?=\/section\/)/.exec(url)[0]
    let section = /(?<=\/section\/)(.*)(?=\/session)/.exec(url)[0]

    let answers = fetch_answers(course, section)
    answers.then(answers => {
        document.getElementById("answers").innerHTML = generate_answers(answers)
    })
}

async function fetch_answers(course, section) {
    return fetch(`https://course.app.senecalearning.com/api/courses/${course}/signed-url?sectionId=${section}`, {
        headers: {
            correlationId: (Math.random() + 1).toString(36).substring(7)
        }
    })
        .then(response => response.json())
        .then(data => data["url"])
        .then(async url => {
            return await fetch(url)
                .then(response => response.json())
        })
}

function generate_answers(answers) {
    let title = answers["title"]
    let questions = ""

    answers["contents"].forEach(content => {
        questions += `
        <div class="content">
            <h3>${content["tags"][0]}</h3>
        `

        content["contentModules"].forEach(question => {
            let res = ""
            switch (question["moduleType"]) {
                case "wordfill":
                    question["content"]["words"].forEach(answer_part => {
                        if (typeof answer_part === "string") {
                            res += answer_part
                        } else {
                            res += `<b>${answer_part["word"]}</b>`
                        }
                    })
                    questions += `
                    <div class="question">
                        <p>${res}</p>
                    </div>
                    `
                    break
                case "multiple-choice":
                    questions += `
                    <div class="question">
                        <p class="question-question"><u>${question["content"]["question"]}</u></p>
                        <p class="question-answer"><b>${question["content"]["correctAnswer"]}</b></p>
                    </div>                
                    `
                    break
                case "list":
                    res += "<ul class=\"question-answer\">"
                    question["content"]["values"].forEach(answer_part => {
                        res += "<li>"
                        answer_part["value"].forEach(answer => {
                            if (typeof answer === "string") {
                                res += answer
                            } else {
                                res += `<b>${answer["word"]}</b>`
                            }
                        })
                        res += "</li>"
                    })
                    res += "</ul>"

                    if (question["content"]["pretestQuestion"] !== undefined) {
                    questions += `
                    <div class="question">
                        <p class="question-question"><u>${question["content"]["pretestQuestion"]}</u></p>
                        <p class="question-answer"><b>${question["content"]["prestestCorrectAnswer"]}</b></p>
                    </div>
                    `
                    }
                    questions += `
                    <div class="question">
                        <p class="question-question"><u>${question["content"]["statement"]}</u></p>
                        ${res}
                    </div>
                    `
                    break
                case "mindmap":
                    if (question["content"]["pretestQuestion"] !== undefined) {
                        questions += `
                        <div class="question">
                            <p class="question-question"><u>${question["content"]["pretestQuestion"]}</u></p>
                            <p class="question-answer"><b>${question["content"]["prestestCorrectAnswer"]}</b></p>
                        </div>
                        `
                    }

                    res = "<ul class=\"question-answer\">"
                    question["content"]["values"].forEach(answer_part => {
                        res += "<li>"
                        answer_part["value"].forEach(answer => {
                            if (typeof answer === "string") {
                                res += answer
                            } else {
                                res += `<b>${answer["word"]}</b>`
                            }
                        })
                        res += "</li>"
                    })
                    res += "</ul>"

                    questions += `
                    <div class="question">
                        <p class="question-question"><u>${question["content"]["statement"]}</u></p>
                        ${res}
                    </div>
                    `
                    break
                case "toggles":
                    res += "<ul class=\"question-answer\">"
                    question["content"]["toggles"].forEach(toggle => {
                        res += `<li><b>${toggle["correctToggle"]}</b></li>`
                    })
                    res += "</ul>"

                    questions += `
                    <div class="question">
                        <p class="question-question"><u>${question["content"]["statement"]}</u></p>
                        ${res}
                    </div>
                    `
                    break
                case "worked-example":
                    if (question["content"]["question"] !== undefined) {
                        questions += `
                        <div class="question">
                            <p class="question-question"><u>${question["content"]["question"]}</u></p>
                        `
                    }
                    question["content"]["steps"].forEach(step => {
                        res = ""
                        step["equation"].forEach(part => {
                            if (typeof part === "string") {
                                res += part
                            } else {
                                res += `<b>${part["word"]}</b>`
                            }
                        })
                        if (step["instruction"] !== undefined) {
                            questions += `
                            <div class="question">
                                <p class="question-question"><u>${step["instruction"]}</u></p>
                                <p class="question-answer">${res}</p>
                            </div>
                            <br>
                            `
                        } else {
                            questions += `
                            <p class="question-answer">${res}</p>
                            `
                        }
                    })

                    if (question["content"]["question"] !== undefined) {
                        questions += "</div>"
                    }

                    break
                case "multiSelect":
                    res += "<ul class=\"question-answer\">"
                    question["content"]["options"].forEach(option => {
                        if (option["correct"] === true) {
                            res += `<li>${option["text"]}</li>`
                        }
                    })
                    res += "</ul>"

                    questions += `
                    <div class="question">
                        <p class="question-question"><u>${question["content"]["question"]}</u></p>
                        ${res}
                    </div>
                    `
                    break
                case "exact-list":
                    res += "<ul class=\"question-answer\">"
                    question["content"]["values"].forEach(value => {
                        res += `<li>${value["value"][0]["word"]}</li>`
                    })
                    res += "</ul>"

                    questions += `
                    <div class="question">
                        <p class="question-question"><u>${question["content"]["statement"]}</u></p>
                        ${res}
                    </div>
                    `
                    break
                case "wrong-word":
                    question["content"]["sentence"].forEach(part => {
                        if (typeof part === "string") {
                            res += part
                        } else {
                            res += `<b>${part["word"]}</b>`
                        }
                    })

                    questions += `
                    <div class="question">
                        <p><u>${res}</u></p>
                    </div>
                    `
                    break
                case "flow":
                    res += "<ul class=\"question-answer\">"
                    question["content"]["orderedValues"].forEach(value => {
                        res += `<li>${value}</li>`
                    })
                    res += "</ul>"

                    questions += `
                    <div class="question">
                        <p class="question-question"><u>${question["content"]["title"]}</u></p>
                        ${res}
                    </div>
                    `
                    break
                case "grid":
                    res += "<ul class=\"question-answer\">"
                    question["content"]["definitions"].forEach(definition => {
                        if (typeof definition["word"] === "string") {
                            res += `<li>${definition["word"]} -> ${definition["text"]}</li>`
                        } else {
                            let tmp = ""
                            definition["word"].forEach(part => {
                                if (typeof part === "string") {
                                    tmp += part
                                } else {
                                    tmp += `<b>${part["word"]}</b>`
                                }
                            })
                            res += `<li>${tmp} --> ${definition["text"]}</li>`
                        }
                    })
                    res += "</ul>"

                    questions += `
                    <div class="question">
                        <p class="question-question"><u>${question["content"]["title"]}</u></p>
                        ${res}
                    </div>
                    `
                    break
                case "image-description":
                    question["content"]["words"].forEach(part => {
                        if (typeof part === "string") {
                            res += part
                        } else {
                            res += `<b>${part["word"]}</b>`
                        }
                    })

                    questions += `
                    <div class="question">
                        <p>${res}</p>
                    </div>
                    `
                    break
            }
        })
        questions += `
        </div>
        `
    })

    questions = questions.replaceAll("\$\$\\leftrightarrow\$\$", "<-->")

    return `
    <h1>${title}</h1>
    ${questions}
    `
}
