import "../Dashboard.css";

function ProfessorDashboard() {

    const name = localStorage.getItem("name") || "Professor";

    return (
        <div className="dashboard">

            {/* Sidebar */}
            <aside className="sidebar">

                <div className="logo">
                    <h2>DDU</h2>
                    <span>Lab Examination Portal</span>
                </div>

                <nav className="sidebar-nav">

                    <button className="active">
                        Dashboard
                    </button>

                    <button>
                        Create Exam
                    </button>

                    <button>
                        My Exams
                    </button>

                    <button>
                        Question Bank
                    </button>

                    <button>
                        Students
                    </button>

                    <button>
                        Exam Schedule
                    </button>

                    <button>
                        Profile
                    </button>

                </nav>

                <button className="logout">
                    Logout
                </button>

            </aside>


            {/* Main Content */}
            <main className="content">

                <header className="page-header">

                    <div>
                        <h1>Professor Dashboard</h1>
                        <p>Welcome, {name}</p>
                    </div>

                </header>


                {/* Quick Actions */}
                <section className="dashboard-section">

                    <div className="section-header">
                        <h2>Quick Actions</h2>
                    </div>

                    <div className="quick-actions">

                        <button className="action-button">
                            <strong>Create Examination</strong>
                            <span>Create a new laboratory examination</span>
                        </button>

                        <button className="action-button">
                            <strong>Question Bank</strong>
                            <span>Manage examination questions</span>
                        </button>

                        <button className="action-button">
                            <strong>View Students</strong>
                            <span>View registered students</span>
                        </button>

                    </div>

                </section>


                {/* Current Exams */}
                <section className="dashboard-section">

                    <div className="section-header">
                        <h2>Examinations</h2>

                        <button className="text-button">
                            View All
                        </button>
                    </div>

                    <div className="exam-list">

                        <div className="professor-exam">

                            <div>
                                <h3>Java Programming Lab</h3>

                                <p>
                                    25 August 2026 • 10:00 AM
                                </p>
                            </div>

                            <span className="status">
                                Scheduled
                            </span>

                        </div>


                        <div className="professor-exam">

                            <div>
                                <h3>Database Management Lab</h3>

                                <p>
                                    28 August 2026 • 11:00 AM
                                </p>
                            </div>

                            <span className="status">
                                Scheduled
                            </span>

                        </div>

                    </div>

                </section>


                {/* Notices */}
                <section className="dashboard-section">

                    <div className="section-header">
                        <h2>Important Information</h2>
                    </div>

                    <div className="notice-list">

                        <p>
                            Examination schedules should be finalized
                            before publishing them to students.
                        </p>

                        <p>
                            Verify the question bank before creating
                            the examination.
                        </p>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default ProfessorDashboard;