import { Link } from 'react-router-dom';
import {
	DashboardIcon, CrawIcon, TemplateIcon, ProductIcon,
} from '../icons';

function SideBar() {
	return (
		<aside
			className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width bg-white"
			id="sidebar"
		>
			<div className="relative flex flex-col flex-1 min-h-0 pt-0  border-r border-gray-200">
				<div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
					<div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
						<ul className="pb-2 space-y-2">
							<li>
								<Link
									to="/"
									className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group"
								>
									<DashboardIcon />
									<span className="ml-3">Dashboard</span>
								</Link>
							</li>
							<li>
								<Link
									to="/crawl"
									className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group"
								>
									<CrawIcon />
									<span className="ml-3">Crawls</span>
								</Link>
							</li>
							<li>
								<Link
									to="/template"
									className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group"
								>
									<TemplateIcon />
									<span className="ml-3">Templates</span>
								</Link>
							</li>
							<li>
								<Link
									to="/product"
									className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group"
								>
									<ProductIcon />
									<span className="ml-3">Products</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</aside>
	);
}

export default SideBar;
