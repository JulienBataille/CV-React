<?php

namespace App\DataFixtures;

use App\Entity\Portfolio;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class PortfolioFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $img = new Portfolio();
        $img->setImageName('chat');
        $img->setTitle('Le charbon');
        $img->setImage('1.jpg');
        $manager->persist($img);

        $manager->flush();
    }
}
