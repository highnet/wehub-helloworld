export default function helloWorldPlugin() {
  console.log("Hello world");
  wehub.addEventListener("helloworld", "hello", () => {
    console.log("hello to you too!");
  });
}
