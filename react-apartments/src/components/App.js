import React from "react";
import "../styles/grid.sass";

function App() {
	return (
		<>
			<div className="container">
				<div className="row g-3">
					<div className="col-md-4">
						<div id="card">Test 0</div>
					</div>
					<div className="col-md-4">
						<div id="card">Text 1 $$</div>
					</div>
					<div className="col-md-4">
						<div id="card">Test</div>
					</div>
					<div className="col-md-12">
						<div id="card">Text #3</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
