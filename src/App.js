import './App.scss';
import { Routes, Route, Outlet } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';

// COMPONENTS
import Logo from './components/Logo/Logo';
import StarHead from './components/StarHead/StarHead';

// PERSISTENT LAYOUT
const PersistentLayout = () => {
	return (
		<>
			<Logo />
			<StarHead />
			<Outlet />
		</>
	);
};

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<PersistentLayout />}>
					<Route index element={<Home />} />
					<Route path="/add-token" element={<AddToken />} />
					<Route path="/edit-token/:id" element={<EditToken />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
