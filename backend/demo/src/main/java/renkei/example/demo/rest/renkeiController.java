package renkei.example.demo.rest;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import renkei.example.demo.model.Char;
import renkei.example.demo.service.DemoService;

// Restのコントローラーとして定義
@RestController
public class renkeiController {

    // DIされたサービスを利用
    @Autowired
    DemoService demoService;
    
    // 連係先としてURLを設定
    // Getリクエストのみ処理させたい場合は@GetMapping()で設定することもある
    @RequestMapping("/api/selectBox")
    public Collection<Char> getData(Model model) {
    	
        // タイトルを取得
        model.addAttribute("user", this.demoService.searchSelectBox());
    	
    	
        return this.demoService.searchSelectBox();
    }
    
    
    @RequestMapping("/api/charList/{word}")
    public Collection<Char> getData(@PathVariable String word) {   	
        return this.demoService.selectCharList(word);
    }
}
