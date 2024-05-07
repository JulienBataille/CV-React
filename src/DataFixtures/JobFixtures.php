<?php

namespace App\DataFixtures;

use App\Entity\Job;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class JobFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 5; $i++) {
        $job = new Job();
        $job->setStart(new \DateTime('2010-01-01'));
        $job->setFinish(new \DateTime('2011-01-01'));
        $job->setTitle('Developpeur web');
        $job->setCompany('Google');
        $job->setDescription('Je developpe des applications web pour Google');
        
        
        $manager->persist($job);
        $manager->flush();
        }
    }
}
