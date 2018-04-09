<?php
/**
 * Created by PhpStorm.
 * User: Dell
 * Date: 08/04/2018
 * Time: 13:35
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AppController extends Controller
{
    public function homepage()
    {
        return $this->render('/background/layout.html.twig');
    }
}