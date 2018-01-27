package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
@Controller
public class MakeVotesController {
    
    @Autowired
    VotesRepository votesRepository;
    @Autowired
    CompetitorRepository competitorRepository;
     
    @RequestMapping(path = "/vote", method = RequestMethod.GET)
    public @ResponseBody Competitor votes() {
        Competitor  omp = new Competitor("keng","Jo");
        Competitor  om = this.competitorRepository.findByName("keng");
        return om;
    }
}