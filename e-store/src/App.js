import './App.css';
import React , {useState} from 'react';

import Catagory  from './components/Catagory';

function App() {
  const [result , setResult] = useState([]);
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/catogoris")
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setResult(data);
    })
  }, [])

  const handleCategoryClick = id =>
  {
    fetch("http://localhost:3001/products?catId=" + id)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setProducts(data);
    })
  }

const renderCategories = () =>
{
  return result.map(c =>
     <Catagory key={c.id} id={c.id} title={c.title} onCategoryClick ={() => handleCategoryClick(c.id ) } />
    );
}

const renderProducts = () =>
{
  return products.map(p => 
    <div>{p.title}</div>
    )
}

  return (
  

    <div className="App">
     
        <header>
          My Store
        </header>

        <section>
        <nav>
          { result && renderCategories()}
        </nav>

        <article>
           <h1>Products</h1>
           {products && renderProducts()}
        </article>
        </section>


        <footer>
          footer
        </footer>
        
        
    </div>

    
  );
}

export default App;
