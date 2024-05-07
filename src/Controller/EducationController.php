<?php

namespace App\Controller;

use App\Repository\JobRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class EducationController extends AbstractController
{
    #[Route('/education', name: 'app_education')]
    public function index(JobRepository $job): JsonResponse
    {
        return $this->json([
            'message' => $job->findAll(),
            
        ]);
    }
}