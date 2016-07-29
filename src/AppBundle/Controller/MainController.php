<?php
// src/AppBundle/Controller/MainController.php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function indexAction(Request $request)
    {
        $session = $request->getSession();
        $userID = $session->get('user_id');
        if (isset($userID) && !empty($userID)) {
            $firstname = $session->get('firstname');
            $lastname = $session->get('lastname');
        } else {
            $userID = -1;
            $firstname = null;
            $lastname = null;
        }

        return $this->render('main/symfonyStocks.html.twig', array(
            'user_id' => $userID,
            'firstname' => $firstname,
            'lastname' => $lastname,
        ));
    }
}
