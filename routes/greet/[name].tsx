import {PageProps} from "$fresh/server.ts";

export default function GreetPage(props: PageProps){
  const {name} = props.params;
  console.log({props})
  return (
    <main>
      <h1>Hello, {name}!</h1>
    </main>
  )
}