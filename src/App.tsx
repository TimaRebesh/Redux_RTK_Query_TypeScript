
// to start use npm run dev

import Comments from "./components/Comments";
import TabBar from "./components/TabBar";
import Users from "./components/Users";
import { useAppSelector } from "./hooks/redux";

export default function App() {

	const { tabNumber } = useAppSelector(state => state.tabbar);

	const getContent = () => {
		if (tabNumber === 2)
			return <Users />
		if (tabNumber === 1)
			return <Comments />
		if (tabNumber === 3) 
			return 
	}

	return (
		<div className="App">
			<TabBar />
			{getContent()}
		</div>
	);
}
