// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { EnvSoCalledCustomEditor } from './EnvSoCalledCustomEditor';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(EnvSoCalledCustomEditor.register(context));
	// commands.executeCommand("vscode.openWith", uri, MyCustomEditor.viewType);
	/* console.log('A');
	(parseFileName(vscode.window.activeTextEditor?.document.fileName ?? '') === '.env') && closeEnv();
	vscode.workspace.onDidOpenTextDocument((t) => {
		if (parseFileName(t.fileName) === '.env') {
			console.log('B');
			closeEnv();
		}
		console.log('C');
	}); */
}

// this method is called when your extension is deactivated
export function deactivate() {

}
