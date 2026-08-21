package com.first.labexam.service;



import com.first.labexam.dto.LoginRequest;
import com.first.labexam.dto.LoginResponse;
import com.first.labexam.entity.User;
import com.first.labexam.repository.UserRepository;
import com.first.labexam.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public LoginResponse login(LoginRequest request) {

        User user = findUser(request.getIdentifier());

        if (!user.getStatus().equals("ACTIVE")) {
            throw new RuntimeException("User account is inactive");
        }

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtService.generateToken(
                user.getEmail(),
                user.getRole()
        );

        return new LoginResponse(
                token,
                user.getRole(),
                user.getName()
        );
    }

    private User findUser(String identifier) {

        if (identifier.contains("@")) {

            return userRepository
                    .findByEmail(identifier)
                    .orElseThrow(() ->
                            new RuntimeException("Invalid credentials")
                    );

        }

        return userRepository
                .findByEnrollmentNumber(identifier)
                .orElseThrow(() ->
                        new RuntimeException("Invalid credentials")
                );
    }
}
