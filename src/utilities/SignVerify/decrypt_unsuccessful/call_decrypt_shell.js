import { exec } from 'child_process';
// Replace 'your_script.sh' with the actual path to your shell script
const scriptPath = '/Users/yash.bansal/workspace/ondc/mobility-sample-bap/src/utilities/SignVerify/python_decrypt_shell.sh';

const decrypt = (scriptArgs) => {
  exec(`sh ${scriptPath} ${scriptArgs.join(' ')}`, (error, stdout) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      return;
    }

    console.log('Script output:', stdout);
  });
};

export default {
  decrypt,
};
