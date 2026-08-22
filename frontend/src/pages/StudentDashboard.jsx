import "../Dashboard.css";

function StudentDashboard() {

    const name = localStorage.getItem("name") || "Student";

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
                        My Exams
                    </button>

                    <button>
                        Exam Schedule
                    </button>

                    <button>
                        Instructions
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
                        <h1>Student Dashboard</h1>
                        <p>Welcome, {name}</p>
                    </div>
                </header>


                {/* Student Information */}
                <section className="dashboard-section">

                    <div className="section-header">
                        <h2>Student Information</h2>
                    </div>

                    <div className="student-details">

                        <div>
                            <span>Name</span>
                            <strong>{name}</strong>
                        </div>

                        <div>
                            <span>Program</span>
                            <strong>Computer Engineering</strong>
                        </div>

                        <div>
                            <span>Semester</span>
                            <strong>VI</strong>
                        </div>

                    </div>

                </section>


                {/* Upcoming Examination */}
                <section className="dashboard-section">

                    <div className="section-header">
                        <h2>Upcoming Examination</h2>
                    </div>

                    <div className="exam-details">

                        <h3>Java Programming Lab</h3>

                        <div className="exam-info">

                            <div>
                                <span>Date</span>
                                <strong>25 August 2026</strong>
                            </div>

                            <div>
                                <span>Time</span>
                                <strong>10:00 AM</strong>
                            </div>

                            <div>
                                <span>Venue</span>
                                <strong>Computer Lab 3</strong>
                            </div>

                            <div>
                                <span>Status</span>
                                <strong className="status">
                                    Scheduled
                                </strong>
                            </div>

                        </div>

                        <button className="primary-button">
                            View Exam Details
                        </button>

                    </div>

                </section>


                {/* Notices */}
                <section className="dashboard-section">

                    <div className="section-header">
                        <h2>Important Notices</h2>
                    </div>

                    <div className="notice-list">

                        <p>
                            Students must bring their university ID card
                            to the examination.
                        </p>

                        <p>
                            Students should report at least 15 minutes
                            before the examination.
                        </p>

                        <p>
                            Students must follow all laboratory
                            examination instructions.
                        </p>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default StudentDashboard;