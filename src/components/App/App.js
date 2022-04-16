import React, {Suspense} from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Container from '../Container';
import HomeView from '../../views/HomeView';
import ArchiveView from '../../views/ArchiveView';

export default function App() {
    return (
      <Container>
        <Suspense>
          <Routes>
              <Route exact path="/" element={<Navigate replace to="/home" />} />
              <Route exact path="/home" element={<HomeView />}/>
              <Route exact path="/archive" element={<ArchiveView />}/>
          </Routes>
        </Suspense>
      </Container>
    );
}


