import random
import string


def encrypt(input):
  encrypted = ""
  counter = 3
  for c in input:
    encrypted += chr(ord(c) ^ counter ^ 0x4d)
    counter += 1
  return encrypted


def hash(input):
  counter = 0
  result = 0
  for i in range(0, 13):
    result += ord(input[i]) * counter
    counter += 0xFFFF
  return result


def validate(input_hash, correct_hash):
  return input_hash == correct_hash


possible_chars = string.ascii_letters + string.digits + string.punctuation

while True:
  key = ''.join(random.choice(possible_chars) for i in range(13))
  valid = validate(hash(encrypt(key)), 0x931F6CE)
  if valid:
    print(key)
