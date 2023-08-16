import UseFetch from "./UseFetch";

function CustomHook() {
  const data = UseFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <>
      {data.map((value, index) => {
        return (
          <h4 key={index}>
            {value.id} . {value.title}
          </h4>
        );
      })}
    </>
  );
}
export default CustomHook;
