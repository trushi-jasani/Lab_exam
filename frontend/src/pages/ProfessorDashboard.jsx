import "../Dashboard.css";

function ProfessorDashboard() {

    const name = localStorage.getItem("name");

    return (
        <div className="dashboard">

            <aside className="sidebar">
                <h2>Lab Exam</h2>

                <button>Dashboard</button>
                <button>Exams</button>
                <button>Question Bank</button>
                <button>Students</button>
            </aside>

            <main className="content">

                <h1>Professor Dashboard</h1>

                <div className="card">
                    <h2>Welcome, {name}</h2>
                    <p>Professor dashboard is working.</p>
                </div>

            </main>

        </div>
    );
}

export default ProfessorDashboard;