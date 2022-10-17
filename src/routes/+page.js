/** @type {import('./$types').PageLoad} */
export async function load(event) {
    const res = await fetch('https://my-json-server.typicode.com/chreha/dev/pagedata');
    const pagedata = await res.json();
    if(res.ok) {
        return {
            props: {
                pagedata: pagedata.filter((el) => {return el.id == "home"})[0]
            }
        }
    }
    return {
        status: res.status,
        error:new Error("could not fetch the guides")
    }
  }