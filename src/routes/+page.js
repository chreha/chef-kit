/** @type {import('./$types').PageLoad} */
export async function load(event) {
    const res = await fetch('http://localhost:1337/api/home-page?populate=sections');
    const pagedata = await res.json();        
    console.log(pagedata);
    return { sections: pagedata.data.attributes.sections}
  }