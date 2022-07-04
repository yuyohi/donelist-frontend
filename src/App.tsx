import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainWindow from 'components/templates/mainWindow';
import LoginPage from 'components/pages/loginPage';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/:id" element={<MainWindow />} />
    </Routes>
  </BrowserRouter>
);

export default App;
