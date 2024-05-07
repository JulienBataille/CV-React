<?php

namespace App\DataFixtures;

use App\Entity\Blog;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class BlogFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i=0; $i < 10; $i++) { 
        $blog = new Blog();
        $blog ->setTitle('Blog Title');
        $blog ->setImage('2.png');
        $blog ->setDescription('c\'est un test');

        $manager->persist($blog);
        $manager->flush();
        }
    }
}
