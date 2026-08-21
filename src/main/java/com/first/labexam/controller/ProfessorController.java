package com.first.labexam.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/professor")
public class ProfessorController {

    @GetMapping("/dashboard")
    public String dashboard() {

        return "Welcome to Professor Dashboard";
    }
}