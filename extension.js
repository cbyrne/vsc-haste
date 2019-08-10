const vscode = require('vscode');
const haste = require('hastebin-gen')
const ncp = require("copy-paste");
const psty = require('@conorthedev/ptsy-node')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('vsc-haste active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let uploadFile = vscode.commands.registerCommand('extension.vsc-haste.upload-file', function () {
		const configuration = vscode.workspace.getConfiguration();
		var currentValue = configuration.get('vsc-haste.host');

		if (currentValue == null) {
			vscode.workspace.getConfiguration().update('vsc-haste.host', "https://hasteb.in", vscode.ConfigurationTarget.Global);
			currentValue = "https://hasteb.in"
		}

		if (currentValue == "https://psty.io") {
			const code = vscode.window.activeTextEditor.document.getText()
			vscode.window.showInformationMessage(`Uploading ${vscode.window.activeTextEditor.document.fileName} to ${currentValue}`);

			psty(code).then(out => {
				ncp.copy(out, function () {
					vscode.window.showInformationMessage(`URL: ${out} - Copied to clipboard!`);
				})
			}).catch(error => {
				// Handle error
				vscode.window.showErrorMessage(`Failed to upload ${vscode.window.activeTextEditor.document.fileName} to ${currentValue} - Error: ${error}`);
			});
		} else {
			const code = vscode.window.activeTextEditor.document.getText()
			vscode.window.showInformationMessage(`Uploading ${vscode.window.activeTextEditor.document.fileName} to ${currentValue}`);

			haste(code, { url: currentValue, extension: "txt" }).then(out => {
				ncp.copy(out, function () {
					vscode.window.showInformationMessage(`URL: ${out} - Copied to clipboard!`);
				})
			}).catch(error => {
				// Handle error
				vscode.window.showErrorMessage(`Failed to upload ${vscode.window.activeTextEditor.document.fileName} to ${currentValue} - Error: ${error}`);
			});
		}
	});

	let uploadSelection = vscode.commands.registerCommand('extension.vsc-haste.upload-file-select', function () {
		const configuration = vscode.workspace.getConfiguration();
		var currentValue = configuration.get('vsc-haste.host');

		if (currentValue == null) {
			vscode.workspace.getConfiguration().update('vsc-haste.host', "https://hasteb.in", vscode.ConfigurationTarget.Global);
			currentValue = "https://hasteb.in"
		}

		if (currentValue == "https://psty.io") {
			const code = vscode.window.activeTextEditor.document.getText(vscode.window.activeTextEditor.selection)
			vscode.window.showInformationMessage(`Uploading ${vscode.window.activeTextEditor.document.fileName} to ${currentValue}`);

			psty(code).then(out => {
				ncp.copy(out, function () {
					vscode.window.showInformationMessage(`URL: ${out} - Copied to clipboard!`);
				})
			}).catch(error => {
				// Handle error
				vscode.window.showErrorMessage(`Failed to upload ${vscode.window.activeTextEditor.document.fileName} to ${currentValue} - Error: ${error}`);
			});
		} else {
			const code = vscode.window.activeTextEditor.document.getText(vscode.window.activeTextEditor.selection)
			vscode.window.showInformationMessage(`Uploading ${vscode.window.activeTextEditor.document.fileName} to ${currentValue}`);

			haste(code, { url: currentValue, extension: "txt" }).then(out => {
				ncp.copy(out, function () {
					vscode.window.showInformationMessage(`URL: ${out} - Copied to clipboard!`);
				})
			}).catch(error => {
				// Handle error
				vscode.window.showErrorMessage(`Failed to upload ${vscode.window.activeTextEditor.document.fileName} to ${currentValue} - Error: ${error}`);
			});
		}
	});

	context.subscriptions.push(uploadFile);
	context.subscriptions.push(uploadSelection);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
