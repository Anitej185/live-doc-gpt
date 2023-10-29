from cryptography.fernet import Fernet
import sys
import os

# function to encrypt a JSON file
def encrypt_json(file_path):
    # generate a key and write it to 'key.key'
    key = Fernet.generate_key()
    with open('key.key', 'wb') as key_file:
        key_file.write(key)

    # read the key from 'key.key'
    with open('key.key', 'rb') as key_file:
        key = key_file.read()

    # open the JSON file and read its data into a variable called 'data'
    with open(file_path, 'rb') as json_file:
        data = json_file.read()

    # encrypt the data read from the JSON file
    fernet = Fernet(key)
    encrypted = fernet.encrypt(data)

    # specify the new file path for the encrypted JSON file
    base_name = os.path.splitext(os.path.basename(file_path))[0]
    encrypted_file_path = f'documents/{base_name}_encrypted.json'

    # create the directory if it doesn't exist
    os.makedirs(os.path.dirname(encrypted_file_path), exist_ok=True)

    # write the new, encrypted data into a new JSON file
    with open(encrypted_file_path, 'wb') as encrypted_file:
        encrypted_file.write(encrypted)

if __name__ == "__main__":
    # check if a JSON file argument is provided
    if len(sys.argv) != 2:
        print("Usage: python script.py <path_to_json_file>")
        sys.exit(1)

    # get the file path from the command line argument
    json_file_path = sys.argv[1]

    # call the function to encrypt the JSON file
    encrypt_json(json_file_path)