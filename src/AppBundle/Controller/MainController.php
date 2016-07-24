<?php
// src/AppBundle/Controller/MainController.php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Goutte\Client;

class MainController extends Controller
{
	public function indexAction(Request $request)
	{
		$session = $request->getSession();
		$user_id = $session->get('user_id');
		if(isset($user_id) && !empty($user_id)){
			$firstname = $session->get('firstname');
			$lastname = $session->get('lastname');
		}else{
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

    public function stockAction()
    {
        $client = new Client();

        $requestUrl = "http://ichart.yahoo.com/table.csv?s=DNOW&a={date.addMonths(-2).format(%27MM%27)}&b={date.today.format(%27dd%27)}&c={date.today.format(%27yyyy%27)}&d={date.addMonths(-1).format(%27MM%27)}&e={date.today.format(%27dd%27)}&f={date.today.format(%27yyyy%27)}&g=d&ignore=.csv";

        $client->request('GET', $requestUrl);

        $contentDump = $client->getResponse()->getContent();

        return $this->render('stocks/stocks.html.twig', array(
            'contentDump' => $contentDump,
        ));
    }
}