import { Routes, Route, Navigate} from 'react-router-dom';
import Container from './components/Container';
import HomeView from './views/HomeView';
import ArchiveView from './views/ArchiveView';

export default function App() {
    return (
      <Container>
          <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<HomeView />}/>
              <Route path="/archive" element={<ArchiveView />}/>
          </Routes>
      </Container>
    );
}


