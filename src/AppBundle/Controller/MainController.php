<?php
// src/AppBundle/Controller/MainController.php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Goutte\Client;

class MainController extends Controller
{
    public function indexAction(Request $request)
    {
        $session = $request->getSession();
        $user_id = $session->get('user_id');
        if (isset($user_id) && !empty($user_id)) {
            $firstname = $session->get('firstname');
            $lastname = $session->get('lastname');
        } else {
            $user_id = -1;
            $firstname = null;
            $lastname = null;
        }

        return $this->render('main/symfonyStocks.html.twig', array(
            'user_id' => $user_id,
            'firstname' => $firstname,
            'lastname' => $lastname,
        ));
    }

    public function showRulesAction()
    {
        return $this->render('rules/rules.html.twig', array());
    }
}
