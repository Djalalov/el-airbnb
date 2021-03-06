import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { DateRangePicker } from "react-date-range";
import { Button } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useRouter } from "next/router";

const Search = () => {
	const navigate = useRouter();

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	function handleSelect(ranges) {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	}
	return (
		<div className="search">
			<DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
			<h2>
				Number of guests <PeopleIcon />
			</h2>

			<input type="number" min={0} defaultValue={2} />
			<Button onClick={() => navigate("/search")}>Search Airbnb</Button>
		</div>
	);
};

export default Search;
