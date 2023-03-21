import { useState } from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { debounce } from "lodash";
import "react-bootstrap-typeahead/css/Typeahead.css";
import News from "./News";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Navigation = () => {
  //category
  const moreCategories = [
    { label: "Sports", value: "sports" },
    { label: "Google", value: "google" },
    { label: "Sci/Fi", value: "sci" },
    { label: "Tech", value: "technology" },
    { label: "Health", value: "health" },
  ];
  //typeahead list
  const typeahead = [
    "technology",
    "health",
    "science",
    "politics",
    "entertainment",
    "education",
    "environmental",
    "politics",
    "sports",
    "crime",
    "weather",
    "travel",
    "lifestyle",
    "food",
    "arts",
  ];
  //date
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate() - 1).padStart(2, "0");
  const utcDate = `${year}-${month}-${day}`;
  //all usestates
  const [inp, setInp] = useState("trending");
  const [date, setDate] = useState(null);
  const [pick, setPick] = useState(utcDate);
  //search
  const handleSearch = debounce((e) => {
    setInp(e.target.value);
  }, 1500);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <h1 className="heading">MyNewsApp</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto align-items-center">
            <h6 className="nav-link" onClick={() => setInp("business")}>
              Business
            </h6>
            <h6 className="nav-link" onClick={() => setInp("entertainment")}>
              Entertainment
            </h6>
            <h6 className="nav-link" onClick={() => setInp("politics")}>
              Politics
            </h6>
            <NavDropdown
              title="More Category"
              style={{ marginBottom: "8px", fontWeight: "600" }}
            >
              {moreCategories.map((category) => (
                <h6
                  className="dropdown-item"
                  onClick={() => setInp(category.value)}
                  key={category.value}
                >
                  {category.label}
                </h6>
              ))}
            </NavDropdown>
            <div className="form-inline">
              <div className="d-flex align-items-center">
                <input
                  list="typeahead"
                  placeholder="Search Topic"
                  className="mr-sm-2"
                  maxResults={3}
                  onChange={handleSearch}
                  style={{
                    background: "white",
                    color: "black",
                    borderRadius: "5px",
                  }}
                />
                <datalist id="typeahead">
                  {typeahead.map((suggestion, index) => (
                    <option value={suggestion} key={index} />
                  ))}
                </datalist>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <div className="d-flex align-items-center col-md-3 ml-auto">
        <DatePicker
          selected={date}
          onChange={(e) => setDate(e)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Choose Date.."
          className="form-control mr-sm-2"
        />
        <Button
          variant="outline-dark"
          onClick={() => setPick(date.toISOString())}
          disabled={!date}
        >
          Pick
        </Button>
      </div> */}

      <News query={inp} date={pick} />
    </>
  );
};

export default Navigation;
