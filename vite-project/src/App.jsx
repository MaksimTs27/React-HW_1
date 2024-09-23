import './App.css';
import { Article } from './Components/Article';
import { Button } from './Components/Button';
import { Product } from './Components/Product';

import { UserCard } from './Components/UserCard';

const handleClick = () => {
  alert('Last Warning!');
};

function App() {
  return (
    <div>
      <UserCard name="Maksim" age={27} />

      <Product
        title={'Honda'}
        description={
          'Honda has been the world"s largest motorcycle manufacturer since 1959,[3][4] reaching a production of 400 million by 19 December 2019.[5] It is also the world"s largest manufacturer of internal combustion engines measured by volume, producing more than 14 million internal combustion engines each year.'
        }
        price={'$4800'}
      />
      <Article companyName={'Yamaha'} price={'$5600'} />
      <Article companyName={'Harley-Davidson'} price={'$8500'} />

      <Button onClick={handleClick} text={"Don't push!"} />
    </div>
  );
}
export default App;
