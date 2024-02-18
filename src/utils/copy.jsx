export default function copyToClipboard(text) {
    // Create a temporary input element
    const input = document.createElement('input');

    // Set the input value to the text you want to copy
    input.value = text;

    // Append the input element to the document body
    document.body.appendChild(input);

    // Select the input value
    input.select();

    // Execute the "copy" command to copy the text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(input);
    alert("Copied")
}
