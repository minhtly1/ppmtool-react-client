import React from 'react';
import {Link} from "react-router-dom";

const CreateProjectButton= () => {
	return (
		//in react routing: Link to="" equals a href=""
		<React.Fragment>
			<Link to="/addProject" className="btn btn-lg btn-info">
				Create a Project
			</Link>
		</React.Fragment>
	);
};

export default CreateProjectButton;
;