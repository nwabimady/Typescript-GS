const message = document.getElementById("greet-message") as HTMLDivElement;

message.onclose = () => {
    console.log('The greeter has closed');
}
