import React from 'react';



const data = () => {
    const [arrayList,setArrayList] = useState([]);
    
    [
{
    id: 1,
    price: 559,
    title: "Curso n1",
    description: "curso de calistenia guiado por profesionales",
    category: "cursos",

},
{
    id: 2,
    price: 559,
    title: "Curso n1",
    description: "curso de calistenia guiado por profesionales",
    category: "cursos",
}
]
}

const prod = () => {
  return (
    <div>
      
    </div>
  );
}

const getList= () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve => (products)
       }, 2000);
    })
}

export default getList;
