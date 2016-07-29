<?php
// src/AppBundle/Controller/MainController.php
namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Goutte\Client;

class StockController extends Controller
{
    public function stockAction(Request $request, $ticker)
    {

        // Obtain stock data from yahoo api
        $client = new Client();

        $baseUrl = 'http://ichart.yahoo.com/table.csv?';
        $stockTicker = 's='.$ticker;
        $queryPartA = '&a={date.addMonths(-2).format(%27MM%27)}';
        $queryPartB = '&b={date.today.format(%27dd%27)}';
        $queryPartC = '&c={date.today.format(%27yyyy%27)}';
        $queryPartD = '&d={date.addMonths(-1).format(%27MM%27)}';
        $queryPartE = '&e={date.today.format(%27dd%27)}';
        $queryPartF = '&f={date.today.format(%27yyyy%27)}';
        $queryPartG = '&g=d&ignore=.csv';

        $requestUrl = $baseUrl.$stockTicker;//.$queryPartA.$queryPartB.$queryPartC.$queryPartD.$queryPartE.$queryPartF.$queryPartG;
        $client->request('GET', $requestUrl);
        $contentDump = $client->getResponse()->getContent();

        // Transpose csv cata into data arrays
        $resultArray = explode("\n", $contentDump);
        $resultArrayLength = count($resultArray);
        for ($i = 0; $i < $resultArrayLength; ++$i) {
            $result[$i] = str_getcsv($resultArray[$i]);
        }

        // Assign data column titles to dataTitles var
        $dataTitles = '';
        $headerArrayLength = count($result[0]);
        for ($j = 0; $j < $headerArrayLength; ++$j) {
            $dataTitles .= ' '.$result[0][$j];
        }

        // Assign closing value data to  closeValueArray
        $dateString = '';
        $closeValueString = '';
        $totalDataArrayLength = count($result) - 2;
        for ($k = $totalDataArrayLength; $k > 1; --$k) {
            $dateArray[$k - 1] = strtotime($result[$k][0]);
            $dateString .= $dateArray[$k - 1].'000, ';
            $closeValueArray[$k - 1] = $result[$k][4];
            $closeValueString .= $closeValueArray[$k - 1].', ';
        }

        return $this->render('stocks/stocks.html.twig', array(
            'dataTitles' => $dataTitles,
            'dateString' => $dateString,
            'closeValueString' => $closeValueString,
            'stockTicker' => $ticker,
        ));
    }
}
