import { Home } from 'components/Home/Home';
import { Movies } from 'components/Movies/Movies';

export const Layout = () => {
  return (
    <header>
      <div>
        <Home />
      </div>
      <div>
        <Movies />
      </div>
    </header>
  );
};
