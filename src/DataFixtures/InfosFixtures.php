<?php

namespace App\DataFixtures;

use App\Entity\Infos;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class InfosFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $infos = new Infos();
        $infos->setMetier([
            ['title'=> 'Développeur Web', 'description' => 'zerzfrzezrtefer erterf  ertertert etre terferftet'],
            ['title'=> 'Développeur Mobile', 'description' => 'zerzfrzezrtefer erterf  ertertert etre terferftet'],
            ['title'=> 'Développeur Fullstack', 'description' => 'zerzfrzezrtefer erterf  ertertert etre terferftet'],
            ['title'=> 'Développeur Frontend', 'description' => 'zerzfrzezrtefer erterf  ertertert etre terferftet'],
            ['title'=> 'Développeur Backend', 'description' => 'zerzfrzezrtefer erterf  ertertert etre terferftet'],
            ]);
        $infos->setAbout('Je suis un développeur web passionné par la programmation et le développement web. Je suis un développeur web passionné par la programmation et le développement web. Je suis un développeur web passionné par la programmation et le développement web. Je suis un développeur web passionné par la programmation et le développement web. Je suis un développeur web passionné par la programmation et le développement web. Je suis un développeur web passionné par la programmation et le développement web. Je suis un développeur web passionné par la programmation et le développement web. Je suis un développeur web passionné par la programmation et le développement web.');
        $infos->setCapacities([
            ['title' => 'HTML', 'percent' => 90],
            ['title' => 'CSS', 'percent' => 80],
            ['title' => 'JavaScript', 'percent' => 70],
            ['title' => 'PHP', 'percent' => 60],
            ['title' => 'Symfony', 'percent' => 50],
            ['title' => 'React', 'percent' => 40],
            ['title' => 'Angular', 'percent' => 30],
            ['title' => 'Vue', 'percent' => 20],
            ['title' => 'Node', 'percent' => 10],
        ]);
        $infos->setLocation([[
            'country' => 'France', 
            'city' => 'Paris'
        ],[
            'country' => 'Canada', 
            'city' => 'Montreal'
        ]]);
        $manager->persist($infos);


        $manager->flush();
    }
}
