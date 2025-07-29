package com.Hospital.Management.System.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class AttributNotFoundException extends RuntimeException {
    
    public AttributNotFoundException(String message) {
        super(message);
    }
}
