CREATE TABLE IF NOT EXISTS users (
                                     id BIGSERIAL PRIMARY KEY,

                                     name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    enrollment_number VARCHAR(50) UNIQUE,

    role VARCHAR(20) NOT NULL,

    department VARCHAR(50),

    batch VARCHAR(50),

    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT check_user_role
    CHECK (role IN ('STUDENT', 'PROFESSOR')),

    CONSTRAINT check_user_status
    CHECK (status IN ('ACTIVE', 'INACTIVE'))
    );