<?php

namespace App\Controller;

use App\Repository\InfosRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class InfosController extends AbstractController
{
    #[Route('/infos', name: 'app_infos')]
    public function index(InfosRepository $infos): Response
    {
        return $this->json([
            'message' => $infos->findAll(),
            
        ]);
    }
}
