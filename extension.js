const spawn = require('child_process').spawnSync;

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.isort', function (args) {
        // The code you place here will be executed every time your command is executed

        var filename = vscode.window.activeTextEditor.document.fileName;
        var process = spawn('isort', [filename]);
        var output = process.stdout.toString();

        // Display a message box to the user
        if (output) {
            vscode.window.showInformationMessage(output);
        }
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
