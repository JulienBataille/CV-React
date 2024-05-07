<?php

namespace App\DataFixtures;

use App\Entity\Portfolio;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class PortofolioFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i=0; $i < 10; $i++) { 
        $port = new Portfolio();
        $port ->setTitle('Blog Title');
        $port ->setImage('2.png');
        $port ->setImageName('c\'est un test');

        $manager->persist($port);
        $manager->flush();
        }
    }
}
