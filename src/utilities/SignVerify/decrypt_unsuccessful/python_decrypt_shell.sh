#!/bin/bash

/Users/yash.bansal/Library/Python/3.10/bin/virtualenv decrypt_env
source decrypt_env/bin/activate
pip3 install -r /Users/yash.bansal/workspace/ondc/reference-implementations/utilities/signing_and_verification/requirements.txt
echo "Decrypting the file yes"
echo "$3"
echo "python3 /Users/yash.bansal/workspace/ondc/reference-implementations/utilities/signing_and_verification/cryptic_decrypt.py decrypt $1 $2 $3"
python3 /Users/yash.bansal/workspace/ondc/reference-implementations/utilities/signing_and_verification/cryptic_decrypt.py $1 $2 $3
