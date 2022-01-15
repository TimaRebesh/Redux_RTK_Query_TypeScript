
// to start use npm run dev

import TabBar from "./components/TabBar";
import Users from "./components/Users";
import { useAppSelector } from "./hooks/redux";

export default function App() {

	const { tabNumber } = useAppSelector(state => state.tabbar);

	const getContent = () => {
		if (tabNumber === 1)
			return <Users />
		if (tabNumber === 2)
			return null
	}

	return (
		<div className="App">
			<TabBar />
			{getContent()}
		</div>
	);
}
