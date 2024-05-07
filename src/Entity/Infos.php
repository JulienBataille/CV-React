<?php

namespace App\Entity;

use App\Repository\InfosRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InfosRepository::class)]
class Infos
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?array $Location = null;

    #[ORM\Column]
    private array $metier = [];

    #[ORM\Column(nullable: true)]
    private ?array $capacities = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $About = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLocation(): ?array
    {
        return $this->Location;
    }

    public function setLocation(?array $Location): static
    {
        $this->Location = $Location;

        return $this;
    }

    public function getMetier(): array
    {
        return $this->metier;
    }

    public function setMetier(array $metier): static
    {
        $this->metier = $metier;

        return $this;
    }

    public function getCapacities(): ?array
    {
        return $this->capacities;
    }

    public function setCapacities(?array $capacities): static
    {
        $this->capacities = $capacities;

        return $this;
    }

    public function getAbout(): ?string
    {
        return $this->About;
    }

    public function setAbout(?string $About): static
    {
        $this->About = $About;

        return $this;
    }
}