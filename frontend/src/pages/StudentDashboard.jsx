import "../Dashboard.css";

function StudentDashboard() {

    const name = localStorage.getItem("name");

    return (
        <div className="dashboard">

            <aside className="sidebar">
                <h2>Lab Exam</h2>

                <button>Dashboard</button>
                <button>My Exams</button>
                <button>Results</button>
            </aside>

            <main className="content">

                <h1>Student Dashboard</h1>

                <div className="card">
                    <h2>Welcome, {name}</h2>
                    <p>Student dashboard is working.</p>
                </div>

            </main>

        </div>
    );
}

export default StudentDashboard;